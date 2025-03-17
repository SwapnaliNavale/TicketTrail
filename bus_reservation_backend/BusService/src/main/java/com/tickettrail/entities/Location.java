package com.tickettrail.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

//@Entity
//@Table(name = "locations")
//@Getter
//@Setter
//public class Location extends BaseEntity {
//
//	private String city;
//	private String state;
//	
//}

@Entity
@Table(name = "locations")
@Getter
@Setter
public class Location extends BaseEntity {

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private String country;
}
