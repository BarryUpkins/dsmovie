package com.example.dsmovie.controllers;

import com.example.dsmovie.dto.MovieDTO;
import com.example.dsmovie.dto.ScoreDTO;
import com.example.dsmovie.services.MovieService;
import com.example.dsmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping( value = "/scores" )
public class ScoreController {
    @Autowired
    private ScoreService service;

    @PutMapping //( value = "/{id}" )
    public MovieDTO saveScore( @RequestBody ScoreDTO dto ){
        MovieDTO movieDTO = service.saveScore( dto );
        return movieDTO;
    }
}
