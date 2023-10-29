import { useState } from 'react'
import TouristMap from '../../Images/undraw_tourist_map_re_293e.png'
import MapIco from '../../Icons/TripsSvg.svg'

import {
    AddTripContent,
    Subtext,
    SubtextMessage,
    LocationContent,
    StartLocationContainer,
    StartLocationLabel,
    StartLocationForm,
    LocationTitle,
    LocationEmptyContainer,
    SavedLocationEmptyMessage,
    SavesLocationEmptyImage,
    AddTripButtonContainer,
    NextButton,
    OdometerLink,
    AddressCard,
    MapIcon,
    AddressContent,
    AddressTitle,
    AddressSubtitle
} from "./AddLoc.Style.jsx"

const AddressCardComponent = ({ option, selected, onChange }) => {
    return (
        <AddressCard selected={selected} onClick={onChange}>
            <MapIcon src={MapIco} />
            <AddressContent>
                <AddressTitle>{option.address_name}</AddressTitle>
                <AddressSubtitle>{option.address_street} {option.address_city} {option.address_state} {option.address_zip}
                </AddressSubtitle>
            </AddressContent>
        </AddressCard>
    )
}

export default function AddStartLoc() {

    const [ isSelected, setIsSelected ] = useState(null)

    const addArray = [
        {
            address_id: 1,
            address_name: "Home",
            address_street: "4321 Home St.",
            address_city: "San Diego",
            address_state: "CA",
            address_zip: 91111
        },
        {
            address_id: 2,
            address_name: "Work",
            address_street: "1234 Office St.",
            address_city: "San Diego",
            address_state: "CA",
            address_zip: 91111
        },{
            address_id: 3,
            address_name: "Client - Westfield UTC",
            address_street: "1234 La Jolla Dr.",
            address_city: "San Diego",
            address_state: "CA",
            address_zip: 91111
        },
    ]

    return (
        <>
            <AddTripContent>
                <Subtext>
                    <SubtextMessage>
                        Locations improve logging accuracy and makes your logbook easier to view.
                    </SubtextMessage>
                </Subtext>
                <LocationContent>
                    <StartLocationContainer>
                        <StartLocationLabel htmlFor="txtAddTripStartLoc">Start Location</StartLocationLabel>
                        <StartLocationForm id="txtAddTripStartLoc" placeholder="Search address"/>
                    </StartLocationContainer>
                    <LocationTitle>Your Locations</LocationTitle>
                    {/* If Saved Addresses array is empty, show this code block: */}
                        {/* START */}
                        
                        {/* END */}
                    {/* If Saved Addresses array has 1 or more elements, show this code block: */}
                        {/* START */}
                        {/* Map array of Saved Addresses of the Current User here */}
                        {
                            addArray.length ?
                            (
                                addArray.map((option, index) => (
                                    <AddressCardComponent 
                                        key={index} 
                                        onChange={() => setIsSelected(index)}
                                        selected={isSelected === index}
                                        option={option}
                                    />
                                ))
                            ) : (
                                <LocationEmptyContainer>
                            <SavedLocationEmptyMessage>
                            Looks like you have not saved any locations. Saved locations will appear here. Start by searching a name or address!
                            </SavedLocationEmptyMessage>
                            <SavesLocationEmptyImage src={TouristMap} />
                        </LocationEmptyContainer>
                            )
                        }
                        
                        {/* END */}
                </LocationContent>
                <AddTripButtonContainer>
                    <NextButton>Next</NextButton>
                    <OdometerLink>Skip and use odometer reading instead</OdometerLink>
                </AddTripButtonContainer>
            </AddTripContent>
        </>
    )
}