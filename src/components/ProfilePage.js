import React from 'react';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function ProfilePage({ userProfile, onEdit }) {
  return (
    // Ana profil sayfası konteyneri
    <main className="profile-page">
      <section className="relative block h-500-px">
        {/* Arka plan görüntüsü */}
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <img src="./images/profilebackround.jpg" alt="Profile Background" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Ana içerik */}
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          {/* Profil kartı */}
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                {/* Profil fotoğrafı */}
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center ">
                  <div className="relative">
                    <img alt="Profile" src={userProfile.photo || "./images/profile-default.jpg"} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                  </div>
                </div>
                {/* Profil düzenle butonu */}
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button onClick={onEdit} className="bg-black active:bg-gate-color uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                      Edit Profile
                    </button>
                  </div>
                </div>
                {/* Sosyal Media */}
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="text-4xl flex justify-center py-4 lg:pt-4 pt-8 text-gray-600">
                    <div className="mr-4 p-3 text-center ">
                      <a href={userProfile.twitter}><AiFillTwitterCircle /></a>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <a href={userProfile.linkedin}><AiFillLinkedin /></a>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <a href={userProfile.github}><AiFillGithub /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Profil bilgileri */}
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 font-montserrat">
                  {userProfile.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold font-inter uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {userProfile.country}, {userProfile.city}
                </div>
                <div className="mb-2 text-blueGray-600 font-gemunu font-semibold mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  {userProfile.profession}
                </div>
                <div className="mb-2 text-blueGray-600 font-gemunu font-semibold">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  {userProfile.university}
                </div>
                <div className="mb-2 text-blueGray-600 font-gemunu font-semibold">
                  <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
                  {userProfile.phoneNumber}
                </div>
                <div className="mb-2 text-blueGray-600 font-gemunu font-semibold">
                  <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
                  {userProfile.email}
                </div>
              </div>
              {/* Profil bio */}
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700 font-eduavusturalia">
                      {userProfile.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;
