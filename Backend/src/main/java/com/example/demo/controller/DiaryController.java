package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Diary;
import com.example.demo.service.DiaryService;

@RestController
@RequestMapping("/diary")
@CrossOrigin
public class DiaryController {
	
	@Autowired
	private DiaryService diaryService;

	@PostMapping("/add")
	public String add(@RequestBody Diary diary) {
		diaryService.saveDiary(diary);
		return "Added";
	}
	
	@GetMapping("/get")
	public List<Diary> getAllDiary(){
		return diaryService.getAllDiary();
	}
	
	@DeleteMapping("/delete/{day}")
	public String det(@PathVariable int day) {
		return diaryService.detById(day);
	}
	
	@PutMapping("/put/{day}")
	public String put(@RequestBody Diary diary,@PathVariable int day) {
		diaryService.updateDiary(diary,day);
		return "updated";
	}
		
	}
