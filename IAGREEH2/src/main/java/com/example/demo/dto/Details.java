package com.example.demo.dto;

import java.util.List;

import com.example.demo.Entity.GenAnwAnwender;

public class Details {
	
	private GenAnwAnwender g;
	private List<LiveSystems> livesystems;
	public GenAnwAnwender getG() {
		return g;
	}
	public void setG(GenAnwAnwender g) {
		this.g = g;
	}
	public List<LiveSystems> getLivesystems() {
		return livesystems;
	}
	public void setLivesystems(List<LiveSystems> livesystems) {
		this.livesystems = livesystems;
	}
	

}
