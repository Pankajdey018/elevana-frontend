import "./ProfileView.css";
import ProfileHeader from "./ProfileHeader";
import ProfileBio from "./ProfileBio";
import ProfileSkills from "./ProfileSkills";
import ProfileExperience from "./ProfileExperience";
import ProfileCertificates from "./ProfileCertificates";

export default function ProfileView() {
  return (
    <div className="profile-view container py-5">
      <div className="profile-card">
        <ProfileHeader />
        <ProfileBio />
        <ProfileSkills />
        <ProfileExperience />
        <ProfileCertificates />
      </div>
    </div>
  );
}