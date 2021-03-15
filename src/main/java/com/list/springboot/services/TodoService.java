package com.list.springboot.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.list.springboot.model.Item;
import com.list.springboot.repo.TodoRepo;

@Service
public class TodoService {

	@Autowired
	private TodoRepo repo;
	private Item itemToUpdate;
	
	 public List<Item> fetchItemList(){
		  return repo.findAll();
	 }
	 
	 
	 public Item saveItemToDB(Item item) {
		return repo.save(item);
	 }
	 
	 public Optional<Item> fetchItemById(int id) {
			return repo.findById(id);
		 }
	 
	 public String deleteItemById(int id) {
		 
		 String result;
		 try {
			  repo.deleteById(id);
			 result = "Sucesso ao deletar item.";
		} catch (Exception e) {
			result = "Error ao deletar item.";
		}
			return result;
		 }
	 
	 
	  public String updateItemInRepo(Item item) {
	        try {
	            itemToUpdate = repo.getOne(item.getId());

	            itemToUpdate.setDesc(item.getDesc());
	            itemToUpdate.setDone(item.isDone());
	            repo.save(itemToUpdate);
	            return "Item atualizado";
	        }catch (Exception e){
	            return "Erro ao atualizar o item: "+item.getId()+"";
	        }
	    }

	 
}
