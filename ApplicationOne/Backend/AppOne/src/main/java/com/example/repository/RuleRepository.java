package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Rule;

public interface RuleRepository extends JpaRepository<Rule, Long> {
}
