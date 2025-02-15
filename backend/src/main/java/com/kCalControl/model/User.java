package com.kCalControl.model;

import java.util.Date;
import java.util.Objects;
import java.util.Set;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, unique = true)
    private String mobile;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;

    @OneToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JoinColumn(name = "credentials_id", referencedColumnName = "id")
    private Credentials credentials;

    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "User_Role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_name"))
    private Set<Role> roles;

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JoinColumn(name = "bm_data_id", referencedColumnName = "id")
    private BMData bmData;

    @OneToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    @JoinColumn(name = "assets_id", referencedColumnName = "id")
    private Assets assets;

    public User(String firstName, String lastName, String mobile) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
    }

    public String getUsername() {
        return getCredentials().getUsername();
    }

    public String getEmail() {
        return getCredentials().getEmail();
    }

    public String getPassword() {
        return getCredentials().getPassword();
    }

    public Date getPasswordDate() {
        return getCredentials().getPasswordDate();
    }

    public Integer getCreationPerson() {
        return getAssets().getCreationPerson();
    }

    public Date getCreationDate() {
        return getAssets().getCreationDate();
    }

    public Integer getModificationPerson() {
        return getAssets().getModificationPerson();
    }

    public Date getModificationDate() {
        return getAssets().getModificationDate();
    }

    public void setModificationDate(Date modificationDate) {
        getAssets().setModificationDate(modificationDate);
    }

    public void setModificationPerson(Integer modificationPerson) {
        getAssets().setModificationPerson(modificationPerson);
    }

    public ObjectNode toJson() {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode userJson = mapper.createObjectNode();
        userJson.put("id", getId());
        userJson.put("firstName", getFirstName());
        userJson.put("lastName", getLastName());
        userJson.put("mobile", getMobile());
        userJson.put("creationPerson", getCreationPerson());
        userJson.put("creationDate", getCreationDate().toString());
        userJson.put("modificationPerson", getModificationPerson());
        userJson.put("modificationDate", getModificationDate().toString());
        return userJson;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(mobile, user.mobile) && Objects.equals(firstName, user.firstName) && Objects.equals(lastName, user.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, mobile, firstName, lastName);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", mobile='" + mobile + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
