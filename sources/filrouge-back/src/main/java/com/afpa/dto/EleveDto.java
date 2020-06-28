package com.afpa.dto;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class EleveDto extends PersonneDto{

	private TuteurDto Tuteur;

	private List<CoursDto> cours;
	
}
