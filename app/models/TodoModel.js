import React from 'react';
import Utils from '../_utils';

// export default class TodoModel extends React.Component {
//     constructor(title, completed){
//         this.id = Utils.guid();
//         this.title = title;
//         this.completed = completed || false;
//         this.createdAt = new Date();
//         this.updatedAt = new Date();
//     }
// }

// // export default TodoModel;
class TodoModel {
    constructor(title, completed) {
      this.id = Utils.guid();
      this.title = title;
      this.completed = completed || false;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }
  
  module.exports = TodoModel;