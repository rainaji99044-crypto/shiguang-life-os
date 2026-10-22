import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';

const elements={
  app:{innerHTML:'',focus(){}},
  modalLayer:{hidden:true},
  sheetContent:{innerHTML:''},
  toast:{textContent:'',classList:{add(){},remove(){}}}
};
const storage=new Map();
const context=vm.createContext({
  console,structuredClone,Date,Intl,URL,Blob,setTimeout(){return 1;},clearTimeout(){},confirm(){return true;},
  location:{hash:'#me'},navigator:{},localStorage:{getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value)},
  document:{
    querySelector(selector){
      if(selector==='#app')return elements.app;
      if(selector==='#modalLayer')return elements.modalLayer;
      if(selector==='#sheetContent')return elements.sheetContent;
      if(selector==='#toast')return elements.toast;
      if(selector.includes('#sheetContent'))return {focus(){}};
      return null;
    },
    querySelectorAll(){return[];},addEventListener(){},createElement(){return{click(){}}}
  },
  window:{addEventListener(){}},
});
context.globalThis=context;
vm.runInContext(await readFile(new URL('../app.js',import.meta.url),'utf8'),context);
vm.runInContext("activeTab.me='timeline';render()",context);
assert.match(elements.app.innerHTML,/日记时间线/);
assert.match(elements.app.innerHTML,/diary-paper-card/);
assert.match(elements.app.innerHTML,/Tiny Type/);
assert.match(elements.app.innerHTML,/diary-cat/);
vm.runInContext('diaryEditorForm(today())',context);
assert.equal(elements.modalLayer.hidden,false);
assert.match(elements.sheetContent.innerHTML,/diary-editor/);
assert.match(elements.sheetContent.innerHTML,/写下一句话，也很好/);
assert.match(elements.sheetContent.innerHTML,/心情与标签/);
assert.match(elements.sheetContent.innerHTML,/textarea name="text" wrap="soft"/);
assert.doesNotMatch(elements.sheetContent.innerHTML,/diary-menu|•••/);
vm.runInContext("location.hash='#study';activePage='study';activeTab.study='graduate';activeTab.graduate='exams';render()",context);
assert.match(elements.app.innerHTML,/考试规划/);
assert.doesNotMatch(elements.app.innerHTML,/学期回顾/);
assert.equal(vm.runInContext('state.examPlans.length',context),5);
assert.equal(vm.runInContext("state.examPlans.find(x=>x.id==='exam-cet').history[0].status",context),'报名已错过');
console.log('Diary and graduate exam smoke checks passed.');
