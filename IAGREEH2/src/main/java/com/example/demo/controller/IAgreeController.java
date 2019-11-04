package com.example.demo.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.GenAnwAnwender;
import com.example.demo.Entity.UserDetails;
import com.example.demo.dto.Details;
import com.example.demo.dto.LiveSystems;
import com.example.demo.service.IAgreeService;

@Controller
public class IAgreeController {

	@Autowired
	IAgreeService iagreeservice;
	
	@RequestMapping("/getData/{id}")
	public @ResponseBody Details getDataOfUser(@PathVariable String id){
		
		Details d = new Details();
		System.out.println("in Controller");
		List listofUsers = iagreeservice.getUserData(id);
		GenAnwAnwender g = new GenAnwAnwender();
		for(Object obj:listofUsers) {
			
			Object[] ob = (Object[]) obj;
			g.setAnwName(ob[0].toString());
			g.setAnwVorname(ob[1].toString());
			g.setAnwEmployeeNr(ob[2].toString());
			g.setAnwEmail(ob[3].toString());
			g.setAnwId((int) ob[4]);
			g.setAnwRacf(id);
		}
		
		
		List listofLiveSystems = iagreeservice.getAuthorisedSystems(g.getAnwId());
		List<LiveSystems> livesystems = new ArrayList<LiveSystems>();
		for(Object live:listofLiveSystems) {
			Object[] ob = (Object[]) live;
			LiveSystems l = new LiveSystems();
			l.setSysId((Integer) ob[0]);
			l.setSysName(ob[1].toString());	
			
		}
		System.out.println(listofLiveSystems);
		
		d.setG(g);
		d.setLivesystems(listofLiveSystems);
		return d;

	}
	
	
}
