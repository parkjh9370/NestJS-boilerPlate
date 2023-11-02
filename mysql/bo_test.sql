# 유저
## 유저 테이블 생성
CREATE TABLE IF NOT EXISTS bo_test (
  bt_index INT AUTO_INCREMENT NOT NULL COMMENT "관리 번호",
  bt_email VARCHAR(50) NOT NULL DEFAULT "" COMMENT "이메일",
  bt_password VARCHAR(255) NOT NULL DEFAULT "" COMMENT "비밀번호",
  bo_last_name VARCHAR(50) NOT NULL DEFAULT "" COMMENT "성 - ex)박, 김, 이",
  bo_first_name VARCHAR(50) NOT NULL DEFAULT "" COMMENT "이름",
  bo_register_date_time DATETIME DEFAULT NULL COMMENT "등록일시",
  bo_update_date_time DATETIME DEFAULT NULL COMMENT "갱신일시",
  bo_delete_date_time DATETIME DEFAULT NULL COMMENT "삭제일시",
  PRIMARY KEY (bo_index)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COMMENT 'bo_test';
