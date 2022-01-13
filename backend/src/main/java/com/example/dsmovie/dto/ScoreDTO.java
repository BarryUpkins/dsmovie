package com.example.dsmovie.dto;

public class ScoreDTO {
    private Long movieId;
    private Double score;
    private String email;

    public ScoreDTO() { }

    public ScoreDTO(Long id, Double score, String email) {
        this.movieId = id;
        this.score = score;
        this.email = email;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long id) {
        this.movieId = id;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
