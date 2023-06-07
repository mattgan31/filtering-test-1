-- a
SELECT p.* FROM t_policy p
JOIN t_client c
ON p.client_number = c.client_number
WHERE p.policy_submit_date > '2018/1/15'
AND EXTRACT(MONTH FROM c.birth_date) = '9';

-- b
SELECT * FROM t_policy p
JOIN t_agent a
ON p.agent_code = a.agent_code
WHERE p.policy_status = 'INFORCE'
AND a.agent_office = 'JAKARTA';

-- c
SELECT (p.commision/p.premium)*100 AS basic_commission, a.* FROM t_policy p
JOIN t_agent a
ON p.agent_code = a.agent_code;

-- d
SELECT (policy_submit_date + 30) AS policy_due_date FROM t_policy;

-- e
SELECT *, ((premium*10)/100) AS result FROM t_agent a
JOIN t_policy p
ON p.agent_code = a.agent_code
WHERE ((premium::numeric*10)/100) < 1000000
ORDER BY result ASC;

