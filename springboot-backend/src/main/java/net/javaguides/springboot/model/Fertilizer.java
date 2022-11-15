package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "fertilizer")
public class Fertilizer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "fertilizer_name")
    private String fertilizerName;

    @Column(name = "chemical_name")
    private String chemicalName;

    @Column(name = "weight")
    private String weight;

    public Fertilizer() {

    }

    public Fertilizer(String fertilizerName, String chemicalName, String weight) {
        super();
        this.fertilizerName = fertilizerName;
        this.chemicalName = chemicalName;
        this.weight = weight;
    }
    public long getId()
    {
        return id;
    }
    public void setId(long id)
    {
        this.id = id;
    }
    public String getFertilizerName()
    {
        return fertilizerName;
    }
    public void setFertilizerName(String fertilizerName)
    {
        this.fertilizerName = fertilizerName;
    }
    public String getChemicalName()
    {
        return chemicalName;
    }
    public void setChemicalName(String chemicalName)
    {
        this.chemicalName = chemicalName;
    }
    public String getWeight()
    {
        return weight;
    }
    public void setWeight(String weight)
    {
        this.weight = weight;
    }
}
