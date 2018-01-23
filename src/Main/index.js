import React from "react"
import { ProfileCard } from "../ProfileCard"

const ProfilesList = props => {
  const profiles = props.profiles

  return profiles.map(profile => {
    return <ProfileCard key={profile.name} profile={profile} />
  })
}

export default ProfilesList
