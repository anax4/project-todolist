package com.list.springboot.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import com.list.springboot.model.Item;
import com.list.springboot.services.TodoService;

@RestController
public class TodoRestController {
	@Autowired
	private TodoService service;
	 
	//@RequestMapping(path = "/getitemlist", method=RequestMethod.GET)
	@GetMapping("/getitemlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Item> fetchItemList(){
		List<Item> itens = new ArrayList<Item>();
		//logic to fetch list from database
		itens = service.fetchItemList();
		return itens;
	}
	
	@PostMapping("/additem")
	@CrossOrigin(origins = "http://localhost:4200")
	public Item saveItem(@RequestBody Item item){
		return service.saveItemToDB(item);
		
	}
	/* remover*/
	@GetMapping("/getitembyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Item fetchItemById(@PathVariable int id){
		return service.fetchItemById(id).get();
		
	}
	@DeleteMapping("/deleteitembyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public String DeleteItemById(@PathVariable int id){
		return service.deleteItemById(id);
		
		
	}
    @PostMapping("/edititem")
    @CrossOrigin(origins = "http://localhost:4200")
    public String updateItem (@RequestBody Item item){
        //Logic to get update product from database
        return service.updateItemInRepo(item);
    }
	
}
