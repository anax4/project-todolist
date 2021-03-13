package com.list.springboot.model;

public class Item {
	private int id;
	private String name;
	private String desc;
	private int price;
	
	
	public Item() {
		
	}
	
	

	public Item(int id, String name, String desc, int price) {
		super();
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.price = price;
	}
	
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}

}
