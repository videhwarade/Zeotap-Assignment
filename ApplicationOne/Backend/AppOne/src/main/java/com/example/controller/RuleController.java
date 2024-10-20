package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.entity.Node;
import com.example.entity.Rule;
import com.example.repository.RuleRepository;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api/rules")
public class RuleController {
	@Autowired
	private RuleRepository ruleRepository;

	// Parse the rule string and convert it into an AST
//	@PostMapping("/create_rule")
//	public Node createRule(@RequestBody Map<String, String> body) {
//		String ruleString = body.get("rule_string");
//		return parseRule(ruleString);
//	}
//	@PostMapping("/create_rule")
//	public Rule createRule(@RequestBody Map<String, String> body) {
//		String ruleString = body.get("rule_string");
//
//		// Create a new Rule object and save it to the database
//		Rule rule = new Rule(ruleString, LocalDateTime.now());
//		return ruleRepository.save(rule); // Save to MySQL
//	}
	@PostMapping("/create_rule")
	public ResponseEntity<String> createRule(@RequestBody Map<String, String> payload) {
		String ruleString = payload.get("rule_string");

		// Parse the rule, create AST, etc.
		// If successful:
		return ResponseEntity.ok("Rule created successfully");
		// If there’s an error, handle it appropriately:
		// return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error message");
	}

	// Combine multiple AST rules
	@PostMapping("/combine_rules")
	public Node combineRules(@RequestBody Map<String, String[]> body) {
		String[] rules = body.get("rules");
		return combineRules(rules);
	}

	// Evaluate the AST against user data
	@PostMapping("/evaluate_rule")
	public boolean evaluateRule(@RequestBody Map<String, Object> body) {
		String ruleString = (String) body.get("rule_string");
		Map<String, Object> data = (Map<String, Object>) body.get("data");
		Node ruleAST = parseRule(ruleString);
		return evaluateAST(ruleAST, data);
	}

	// Helper methods to parse, combine, and evaluate rules
	private Node parseRule(String ruleString) {
		// Parse the rule string into AST (simplified, improve for real-world use)
		// Example: (age > 30 AND department = 'Sales') -> AST
		return new Node("operator", null, null, ruleString); // Simple for demonstration
	}

	private Node combineRules(String[] rules) {
		// Logic to combine rules (improve for real-world use)
		return new Node("operator", null, null, "CombinedRules");
	}

	private boolean evaluateAST(Node node, Map<String, Object> data) {
		// Logic to evaluate AST against data
		return true; // Simple True/False for demonstration
	}
}
