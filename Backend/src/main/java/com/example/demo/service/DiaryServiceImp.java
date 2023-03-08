package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Diary;
import com.example.demo.repository.DiaryRepo;

@Service
public class DiaryServiceImp implements DiaryService{

	@Autowired
	
	private DiaryRepo diaryrepo;
	
	@Override
	public Diary saveDiary(Diary diary) {
		return diaryrepo.save(diary);
		
	}

	@Override
	public List<Diary> getAllDiary() {
		return diaryrepo.findAll();
	}
	
			public String updateDiary(Diary newDiary,int day) {
		Diary diary = diaryrepo.findById(day).get();
		diary.setDay(newDiary.getDay());
		diary.setNotes(newDiary.getNotes());
		diaryrepo.save(diary);
		return "Updated Successfully";
	}
	
	public String detById(int day) {
		diaryrepo.deleteById(day);
		return "deleted";
	}
	
	
	
}
