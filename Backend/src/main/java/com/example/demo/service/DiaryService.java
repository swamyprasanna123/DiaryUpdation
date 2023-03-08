package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Diary;

public interface DiaryService {

	public Diary saveDiary(Diary diary);
	public List<Diary> getAllDiary();
	public String detById(int daynum);
	public String updateDiary(Diary diary, int day);
}