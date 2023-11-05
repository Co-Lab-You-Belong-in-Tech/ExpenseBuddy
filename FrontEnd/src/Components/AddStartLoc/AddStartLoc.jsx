import { useState, useEffect } from 'react'
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

const base_api_url = import.meta.env.VITE_APP_BASE_API
const gian = import.meta.env.VITE_APP_GIAN

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
    const [ addresses, setAddresses ] = useState([])
    const [ loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const res = await fetch(`${base_api_url}/addresses`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${gian}`
                }
            })
            if (!res.ok) {
                throw new Error("Failed to fetch")
            }
            const data = await res.json()
            const addy = await data
            const arr = []
            console.log(addy)
            for (let k of addy) {
                arr.push(k)
            }
            setAddresses(arr)
            setLoading(false)
        })()
    }, [])

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
                    {
                        loading ?
                        (<p>Loading...</p>) : 
                        (addresses.length ?
                            (addresses.map((option, index) => (
                                    <AddressCardComponent 
                                        key={index} 
                                        onChange={() => setIsSelected(index)}
                                        selected={isSelected === index}
                                        option={option}
                                    />
                                ))
                            ) : (<LocationEmptyContainer>
                                    <SavedLocationEmptyMessage>
                                    Looks like you have not saved any locations. Saved locations will appear here. Start by searching a name or address!
                                    </SavedLocationEmptyMessage>
                                    <SavesLocationEmptyImage src={TouristMap} />
                                </LocationEmptyContainer>
                            )
                        )
                    }
                </LocationContent>
                <AddTripButtonContainer>
                    <NextButton>Next</NextButton>
                    <OdometerLink>Skip and use odometer reading instead</OdometerLink>
                </AddTripButtonContainer>
            </AddTripContent>
        </>
    )
}