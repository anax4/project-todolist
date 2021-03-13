package com.list.springboot.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.list.springboot.model.Item;

public interface TodoRepo extends JpaRepository<Item, Integer> {

}
