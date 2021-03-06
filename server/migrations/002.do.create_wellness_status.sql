CREATE TABLE IF NOT EXISTS wellness_status (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  user_id INTEGER,
  status INTEGER NOT NULL,
  date_created TIMESTAMP DEFAULT now() NOT NULL,
  date_modified TIMESTAMP,
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES wellness_users(id)
);