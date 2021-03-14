package com.list.springboot.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

public class Item {
	@Id
	private int id;
	private String desc;
	private boolean done;
	
	
	public Item() {
		
	}
	
	

	public Item(int id, String desc, Boolean done) {
		super();
		this.id = id;
		this.desc = desc;
		this.done = done;
		
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

}
