-- -- DROP TABLE Region; 
-- CREATE TABLE Region (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(155),
--     phone VARHCAR(155),
--     abb VARCHAR(255) NOT NULL,
--     side VARCHAR(255) NOT NULL
--  );

--  INSERT INTO Region (name, email, phone, abb, side) VALUES 
-- ('Республика Адыгея', 'qqq@gmail.com', '+7 999 999-99-99', 'AD', 'left'),
-- ('Республика Алтай', 'qqq@gmail.com', '+7 999 999-99-99', 'AL', 'left'),
-- ('Республика Башкортостан', 'qqq@gmail.com', '+7 999 999-99-99', 'BA', 'left'),
-- ('Республика Бурятия', 'qqq@gmail.com', '+7 999 999-99-99', 'BU', 'right'),
-- ('Республика Дагестан', 'qqq@gmail.com', '+7 999 999-99-99', 'DA', 'left'),
-- ('Республика Ингушетия', 'qqq@gmail.com', '+7 999 999-99-99', 'IN', 'left'),
-- ('Кабардино-Балкарская Республика', 'qqq@gmail.com', '+7 999 999-99-99', 'KB', 'left'),
-- ('Республика Калмыкия', 'qqq@gmail.com', '+7 999 999-99-99', 'KL', 'left'),
-- ('Карачаево-Черкесская Республика', 'qqq@gmail.com', '+7 999 999-99-99', 'KC', 'left'),
-- ('Республика Карелия', 'qqq@gmail.com', '+7 999 999-99-99', 'KR', 'left'),
-- ('Республика Коми', 'qqq@gmail.com', '+7 999 999-99-99', 'KO', 'left'),
-- ('Республика Крым', 'qqq@gmail.com', '+7 999 999-99-99', 'CR', 'left'),
-- ('Республика Марий Эл', 'qqq@gmail.com', '+7 999 999-99-99', 'ME', 'left'),
-- ('Республика Мордовия', 'qqq@gmail.com', '+7 999 999-99-99', 'MO', 'left'),
-- ('Республика Саха (Якутия)', 'qqq@gmail.com', '+7 999 999-99-99', 'SA', 'right'),
-- ('Республика Северная Осетия - Алания', 'qqq@gmail.com', '+7 999 999-99-99', 'NO', 'left'),
-- ('Республика Татарстан', 'qqq@gmail.com', '+7 999 999-99-99', 'TA', 'left'),
-- ('Республика Тыва', 'qqq@gmail.com', '+7 999 999-99-99', 'TY', 'right'),
-- ('Удмуртская Республика', 'qqq@gmail.com', '+7 999 999-99-99', 'UD', 'left'),
-- ('Республика Хакасия', 'qqq@gmail.com', '+7 999 999-99-99', 'KK', 'right'),
-- ('Чеченская Республика', 'qqq@gmail.com', '+7 999 999-99-99', 'CE', 'left'),
-- ('Чувашская Республика', 'qqq@gmail.com', '+7 999 999-99-99', 'CU', 'left'),
-- ('Алтайский край', 'qqq@gmail.com', '+7 999 999-99-99', 'AK', 'left'),
-- ('Забайкальский край', 'qqq@gmail.com', '+7 999 999-99-99', 'ZK', 'right'),
-- ('Камчатский край', 'qqq@gmail.com', '+7 999 999-99-99', 'KKR', 'right'),
-- ('Краснодарский край', 'qqq@gmail.com', '+7 999 999-99-99', 'KDA', 'left'),
-- ('Красноярский край', 'qqq@gmail.com', '+7 999 999-99-99', 'KYA', 'left'),
-- ('Пермский край', 'qqq@gmail.com', '+7 999 999-99-99', 'PER', 'left'),
-- ('Приморский край', 'qqq@gmail.com', '+7 999 999-99-99', 'PRI', 'right'),
-- ('Ставропольский край', 'qqq@gmail.com', '+7 999 999-99-99', 'STA', 'left'),
-- ('Хабаровский край', 'qqq@gmail.com', '+7 999 999-99-99', 'KHA', 'right'),
-- ('Амурская область', 'qqq@gmail.com', '+7 999 999-99-99', 'AMU', 'right'),
-- ('Архангельская область', 'qqq@gmail.com', '+7 999 999-99-99', 'ARK', 'left'),
-- ('Астраханская область', 'qqq@gmail.com', '+7 999 999-99-99', 'AST', 'left'),
-- ('Белгородская область', 'qqq@gmail.com', '+7 999 999-99-99', 'BEL', 'left'),
-- ('Брянская область', 'qqq@gmail.com', '+7 999 999-99-99', 'BRY', 'left'),
-- ('Владимирская область', 'qqq@gmail.com', '+7 999 999-99-99', 'VLA', 'left'),
-- ('Волгоградская область', 'qqq@gmail.com', '+7 999 999-99-99', 'VOL', 'left'),
-- ('Вологодская область', 'qqq@gmail.com', '+7 999 999-99-99', 'VLG', 'left'),
-- ('Воронежская область', 'qqq@gmail.com', '+7 999 999-99-99', 'VOR', 'left'),
-- ('Ивановская область', 'qqq@gmail.com', '+7 999 999-99-99', 'IVA', 'left'),
-- ('Иркутская область', 'qqq@gmail.com', '+7 999 999-99-99', 'IRK', 'right'),
-- ('Калининградская область', 'qqq@gmail.com', '+7 999 999-99-99', 'KGD', 'left'),
-- ('Калужская область', 'qqq@gmail.com', '+7 999 999-99-99', 'KLU', 'left'),
-- ('Кемеровская область', 'qqq@gmail.com', '+7 999 999-99-99', 'KEM', 'left'),
-- ('Кировская область', 'qqq@gmail.com', '+7 999 999-99-99', 'KIR', 'left'),
-- ('Костромская область', 'qqq@gmail.com', '+7 999 999-99-99', 'KOS', 'left'),
-- ('Курганская область', 'qqq@gmail.com', '+7 999 999-99-99', 'KUR', 'left'),
-- ('Курская область', 'qqq@gmail.com', '+7 999 999-99-99', 'KRS', 'left'),
-- ('Ленинградская область', 'qqq@gmail.com', '+7 999 999-99-99', 'LEN', 'left'),
-- ('Липецкая область', 'qqq@gmail.com', '+7 999 999-99-99', 'LIP', 'left'),
-- ('Магаданская область', 'qqq@gmail.com', '+7 999 999-99-99', 'MAG', 'right'),
-- ('Московская область', 'qqq@gmail.com', '+7 999 999-99-99', 'MOS', 'left'),
-- ('Мурманская область', 'qqq@gmail.com', '+7 999 999-99-99', 'MUR', 'left'),
-- ('Нижегородская область', 'qqq@gmail.com', '+7 999 999-99-99', 'NIZ', 'left'),
-- ('Новгородская область', 'qqq@gmail.com', '+7 999 999-99-99', 'NGR', 'left'),
-- ('Новосибирская область', 'qqq@gmail.com', '+7 999 999-99-99', 'NVS', 'left'),
-- ('Омская область', 'qqq@gmail.com', '+7 999 999-99-99', 'OMS', 'left'),
-- ('Оренбургская область', 'qqq@gmail.com', '+7 999 999-99-99', 'ORE', 'left'),
-- ('Орловская область', 'qqq@gmail.com', '+7 999 999-99-99', 'ORL', 'left'),
-- ('Пензенская область', 'qqq@gmail.com', '+7 999 999-99-99', 'PNZ', 'left'),
-- ('Псковская область', 'qqq@gmail.com', '+7 999 999-99-99', 'PSK', 'left'),
-- ('Ростовская область', 'qqq@gmail.com', '+7 999 999-99-99', 'ROS', 'left'),
-- ('Рязанская область', 'qqq@gmail.com', '+7 999 999-99-99', 'RYA', 'left'),
-- ('Самарская область', 'qqq@gmail.com', '+7 999 999-99-99', 'SAM', 'left'),
-- ('Саратовская область', 'qqq@gmail.com', '+7 999 999-99-99', 'SAR', 'left'),
-- ('Сахалинская область', 'qqq@gmail.com', '+7 999 999-99-99', 'SAK', 'right'),
-- ('Свердловская область', 'qqq@gmail.com', '+7 999 999-99-99', 'SVE', 'left'),
-- ('Смоленская область', 'qqq@gmail.com', '+7 999 999-99-99', 'SMO', 'left'),
-- ('Тамбовская область', 'qqq@gmail.com', '+7 999 999-99-99', 'TAM', 'left'),
-- ('Тверская область', 'qqq@gmail.com', '+7 999 999-99-99', 'TVE', 'left'),
-- ('Томская область', 'qqq@gmail.com', '+7 999 999-99-99', 'TOM', 'left'),
-- ('Тульская область', 'qqq@gmail.com', '+7 999 999-99-99', 'TUL', 'left'),
-- ('Тюменская область', 'qqq@gmail.com', '+7 999 999-99-99', 'TYU', 'left'),
-- ('Ульяновская область', 'qqq@gmail.com', '+7 999 999-99-99', 'ULY', 'left'),
-- ('Челябинская область', 'qqq@gmail.com', '+7 999 999-99-99', 'CHE', 'left'),
-- ('Ярославская область', 'qqq@gmail.com', '+7 999 999-99-99', 'YAR', 'left'),
-- ('Москва', 'qqq@gmail.com', '+7 999 999-99-99', 'MOW', 'left'),
-- ('Санкт-Петербург', 'qqq@gmail.com', '+7 999 999-99-99', 'SPB', 'left'),
-- ('Еврейская автономная область', 'qqq@gmail.com', '+7 999 999-99-99', 'YEV', 'right'),
-- ('Ненецкий автономный округ', 'qqq@gmail.com', '+7 999 999-99-99', 'NAO', 'left'),
-- ('Ханты-Мансийский автономный округ - Югра', 'qqq@gmail.com', '+7 999 999-99-99', 'KHM', 'left'),
-- ('Чукотский автономный округ', 'qqq@gmail.com', '+7 999 999-99-99', 'CHU', 'right'),
-- ('Ямало-Ненецкий автономный округ', 'qqq@gmail.com', '+7 999 999-99-99', 'YAN', 'left'),
-- ('Севастополь', 'qqq@gmail.com', '+7 999 999-99-99', 'SEV', 'left'),
-- ('Донецкая народная республика', 'qqq@gmail.com', '+7 999 999-99-99', 'DNR', 'left'),
-- ('Луганская народная республика', 'qqq@gmail.com', '+7 999 999-99-99', 'LNR', 'left'),
-- ('Запорожская область', 'qqq@gmail.com', '+7 999 999-99-99', 'ZO', 'left'),
-- ('Херсонская область', 'qqq@gmail.com', '+7 999 999-99-99', 'KHE', 'left');