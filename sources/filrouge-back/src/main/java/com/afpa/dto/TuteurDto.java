package com.afpa.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@AllArgsConstructor
@Getter
@Setter
@ToString
@NoArgsConstructor
public class TuteurDto extends AdulteDto {
	private List<EleveDto> eleve;
	private String email;
}
