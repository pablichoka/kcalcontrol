package com.kCalControl.model;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "type")
    private String type;

    @Column(name = "category")
    private String category;

    @Column(name = "description")
    private String description;

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JoinColumn(name = "assets_id", referencedColumnName = "id")
    private Assets assets;

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JoinColumn(name = "nutrients_id", referencedColumnName = "id")
    private Nutrients nutrients;

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JoinColumn(name = "vitamins_id", referencedColumnName = "id")
    private Vitamins vitamins;

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE}  )
    @JoinColumn(name = "minerals_id", referencedColumnName = "id")
    private Minerals minerals;

    public Integer getNutrientsId() {
        return getNutrients().getId();
    }

    public Integer getVitaminsId() {
        return getVitamins().getId();
    }

    public Integer getMineralsId() {
        return getMinerals().getId();
    }

    public ObjectNode toJson() {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode node = mapper.createObjectNode();
        node.put("id", this.getId());
        node.put("type", this.getType());
        node.put("category", this.getCategory());
        node.put("description", this.getDescription());
        node.put("assets", this.getAssets().toString());
        node.put("nutrients", this.getNutrients().toString());
        node.put("vitamins", this.getVitamins().toString());
        return node;
    }

}
