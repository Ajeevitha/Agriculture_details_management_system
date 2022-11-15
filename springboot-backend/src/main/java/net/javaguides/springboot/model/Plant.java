package net.javaguides.springboot.model;


import javax.persistence.*;

@Entity
@Table(name = "plant")
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "plant_name")
    private String plantName;

    @Column(name = "scientific_name")
    private String scientificName;

    @Column(name = "species")
    private String species;

    public Plant() {

    }

    public Plant(String plantName, String scientificName, String species) {
        super();
        this.plantName = plantName;
        this.scientificName = scientificName;
        this.species = species;
    }
    public long getId() {
        return id;
    }
    public void setPlantId(long id)
    {
        this.id = id;
    }
    public String getPlantName() {
        return plantName;
    }
    public void setPlantName(String plantName)
    {
        this.plantName = plantName;
    }
    public String getScientificName()
    {
        return scientificName;
    }
    public void setScientificName(String scientificName)
    {
        this.scientificName = scientificName;
    }
    public String getSpecies()
    {
        return species;
    }
    public void setSpecies(String species)
    {
        this.species = species;
    }
}
