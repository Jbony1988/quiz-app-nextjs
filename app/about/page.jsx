

const sharedClasses = {
  textCenter: 'text-center',
  textZincLight: 'text-zinc-600 dark:text-zinc-400',
  textZincDark: 'text-zinc-900 dark:text-zinc-100',
  mxAuto: 'mx-auto',
  roundedFull: 'rounded-full',
  spaceY: 'space-y-6',
}

const AboutUs = () => {
  return (
    <div className="bg-white light:bg-zinc-800 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className={sharedClasses.textCenter}>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-500 sm:text-4xl">
            About Us
          </h2>
          <p className={`mt-4 ${sharedClasses.textZincLight}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet, felis in
            congue.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
          <TeamCard />
          <MissionCard />
          <VisionCard />
        </div>
      </div>
    </div>
  )
}

const TeamCard = () => {
  return (
    <div className={`${sharedClasses.textCenter} ${sharedClasses.spaceY}`}>
      <img
        src="https://placehold.co/200x200"
        alt="Team"
        className={`${sharedClasses.mxAuto} ${sharedClasses.roundedFull}`}
      />
      <h3 className={`text-xl font-semibold ${sharedClasses.textZincDark}`}>Our Team</h3>
      <p className={sharedClasses.textZincLight}>
        Meet the passionate individuals behind our platform.
      </p>
    </div>
  )
}

const MissionCard = () => {
  return (
    <div className={`${sharedClasses.textCenter} ${sharedClasses.spaceY}`}>
      <img
        src="https://placehold.co/200x200"
        alt="Mission"
        className={`${sharedClasses.mxAuto} ${sharedClasses.roundedFull}`}
      />
      <h3 className={`text-xl font-semibold ${sharedClasses.textZincDark}`}>Our Mission</h3>
      <p className={sharedClasses.textZincLight}>
        Empowering people to learn coding in an interactive way.
      </p>
    </div>
  )
}

const VisionCard = () => {
  return (
    <div className={`${sharedClasses.textCenter} ${sharedClasses.spaceY}`}>
      <img
        src="https://placehold.co/200x200"
        alt="Vision"
        className={`${sharedClasses.mxAuto} ${sharedClasses.roundedFull}`}
      />
      <h3 className={`text-xl font-semibold ${sharedClasses.textZincDark}`}>Our Vision</h3>
      <p className={sharedClasses.textZincLight}>Making coding education accessible to everyone.</p>
    </div>
  )
}

export default AboutUs
