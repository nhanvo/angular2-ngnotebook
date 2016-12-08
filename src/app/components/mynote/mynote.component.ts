import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-mynote',
  templateUrl: './mynote.component.html',
  styleUrls: ['./mynote.component.css']
})
export class MynoteComponent implements OnInit {
	noteStr: string;
	noteList: any;
	editText: string;

  constructor() { }

  ngOnInit() {
  	let noteList = JSON.parse(localStorage.getItem("noteList"));
  	if(noteList) {
  		this.noteList = noteList;
  	} else {
  		this.noteList = [];
  	}
  }

  createNote() {
  	let time = Date.now();
  	let noteData = {
  		time: time,
  		text: this.noteStr,
  		editState: false
  	};

  	this.noteList.unshift(noteData);

  	let newNote = JSON.stringify(this.noteList);
  	localStorage.setItem("noteList", newNote);
  	this.noteStr = "";
  }

  deleteNote(note) {
  	for(var c = 0; c < this.noteList.length; c++) {
  		if(this.noteList[c].time == note.time) {
  			this.noteList.splice(c, 1);
  		}
  	}

  	let newNote = JSON.stringify(this.noteList);
  	localStorage.setItem("noteList", newNote);
  }

  enterEditMode(note) {
  	note.editState = !note.editState;
  	this.editText = note.text;
  }

  updateNote(note) {
  	note.editState = !note.editState;
  	note.text = this.editText;
  	this.editText = "";

  	let newNote = JSON.stringify(this.noteList);
  	localStorage.setItem("noteList", newNote);
  }

  formatTime(time) {
  	return moment(time).calendar();
  }
}
