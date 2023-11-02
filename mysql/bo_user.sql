# 유저
## 유저 테이블 생성
CREATE TABLE IF NOT EXISTS bo_user (
  bo_index INT AUTO_INCREMENT NOT NULL COMMENT "관리 번호",
  bo_email VARCHAR(50) NOT NULL DEFAULT "" COMMENT "이메일",
  bo_password VARCHAR(255) NOT NULL DEFAULT "" COMMENT "비밀번호",
  bo_last_name VARCHAR(50) NOT NULL DEFAULT "" COMMENT "성 - ex)박, 김, 이",
  bo_first_name VARCHAR(50) NOT NULL DEFAULT "" COMMENT "이름",
  bo_profile_image_url VARCHAR(255) NOT NULL DEFAULT "" COMMENT "프로필 이미지 URL",
  bo_is_admin ENUM("Y", "N") DEFAULT "N" NOT NULL COMMENT "관리자 여부",
  bo_is_use ENUM("Y", "N") DEFAULT "Y" NOT NULL COMMENT "사용 여부",
  bo_refresh_token VARCHAR(255) NOT NULL DEFAULT '' COMMENT "리프레쉬 토큰",
  bo_refresh_token_expiration_date_time DATETIME DEFAULT NULL COMMENT "리프레쉬 토큰 만료일시",
  bo_register_date_time DATETIME DEFAULT NULL COMMENT "등록일시",
  bo_update_date_time DATETIME DEFAULT NULL COMMENT "갱신일시",
  bo_delete_date_time DATETIME DEFAULT NULL COMMENT "삭제일시",
  PRIMARY KEY (bo_index)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COMMENT 'bo_user';
