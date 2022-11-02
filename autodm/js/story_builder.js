/*
scroll to top on focus
on scroll text area loses focus???

*/

class Plot {
  constructor(plot) {
    this.items = [];
    this.nextId = 0;
    this.staticItems = [];
    this.id = utcSeconds();
    if(plot != undefined){
      this.items = plot.items;
      this.nextId = plot.nextId;
      this.staticItems = plot.staticItems;
      this.id = plot.id;
    }
  }

  addItem(text, parentId) {
    this.items[this.items.length] = new PlotItem(text, this.nextId);
    let index = this.getIndex(parentId);
    this.items[index].children[this.items[index].children.length] = this.nextId;
    this.nextId++;
  }

  addStaticItem(text) {
    this.items[this.items.length] = new PlotItem(text, this.nextId);
    this.staticItems[this.staticItems.length] = this.nextId;
    this.nextId++;
  }

  remItem(id) {
    let index = this.getIndex(id);
    for(let i = 0; i < this.staticItems.length; i++) {
      if(this.staticItems[i] == id) this.staticItems.splice(i, 1);
    }
    for(let i = 0; i < this.items[index].children.length; i++) {
      this.remItem(this.items[index].children[i]);
    }
    this.items.splice(index, 1);
    let parent = this.getParent(id);
    for(let i = 0; i < this.items[this.getIndex(parent)].children.length; i++){
      if(this.items[this.getIndex(parent)].children[i] == id) this.items[this.getIndex(parent)].children.splice(i, 1);
      break;
    }

  }

  getIndex(id) {
    let index = -1;
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].id == id) return i;
    }
  }

  getParent(id) {
    let parentId;
    let found = false;
    for(let i = 0; i < this.items.length; i++) {
      if(found) break;
      for(let n = 0; n < this.items[i].children.length; n++) {
        if(this.items[i].children[n] == id) {
          parentId = this.items[i].id;
          found = true;
          break;
        }
      }
    }
    return parentId;
  }

}

class PlotItem {
  constructor(text, id) {
    this.text = text;
    this.children = new Array();
    this.id = id;
  }

  addChild(id) {
    this.children[this.children.length] = id;
  }

  removeChild(id) {
    let index = this.children.indexOf(id);
    if(index != -1) {
      this.children.splice(index, 1);
    }
    else {
      console.log('Element to remove was not found.');
    }
  }

}

function utcTimestamp() {
  if(!Date.now) {
    Date.now = function() { return new Date().getTime(); }
  }
  return Date.now();
}
function utcSeconds() {
  return Math.floor(utcTimestamp() / 1000);
}
