import React from 'react'

const Members = () => {

    const people = [
        {
          name: 'Chandrashekhar',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/D5635AQGj8z962N5InQ/profile-framedphoto-shrink_400_400/0/1673072603769?e=1687536000&v=beta&t=mrrQae6KUORbBrBejOqXvoZ14kv4U8tjliUqhtpl31c',
        },
        {
          name: 'Akshat',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/D5603AQGoMNm77-0ruw/profile-displayphoto-shrink_100_100/0/1673372347152?e=1692230400&v=beta&t=96CA73Hwq5mOoJJ8CeOf0SLhCs08WFCtXryptjM8g0c',
        },
        {
          name: 'Anubhav',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/C4E03AQF_iJra0NUMNw/profile-displayphoto-shrink_400_400/0/1596693769628?e=1692230400&v=beta&t=jtmj_zMcwgthUDCiZmCflOZ3M8gEEtODUWsJOF2ipuE',
        },
        {
          name: 'Ritesh',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/D4E03AQH-qYFAiSriCw/profile-displayphoto-shrink_100_100/0/1684483060960?e=1692230400&v=beta&t=MuLBem9SpeM1lrcaZSWeyXelUUV9Lo_ejmuGtr8XGug',
        },
        {
          name: 'Rahul',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/C5603AQEOeT4WcxGYKw/profile-displayphoto-shrink_100_100/0/1657093378883?e=1692230400&v=beta&t=zYcHDEzUdVZBpnIzMgY0fWV6qChqRKJrdi_rW20s3M0',
        },
        {
          name: 'Mandeep',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/D5603AQGy5va54ZTUMA/profile-displayphoto-shrink_100_100/0/1684499673448?e=1692230400&v=beta&t=7ff5tej6dlXDZoJaDuTjui-le98HkwEnyyuua9GC6tM',
        },
        {
          name: 'Robin',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/D5603AQE2CmRBWFJbUA/profile-displayphoto-shrink_100_100/0/1684591150689?e=1692230400&v=beta&t=rlOLFSSPw5MyU3jO4L3UolI6QDEHY3-JkqEFB_8XBDs',
        },
        {
          name: 'Shubham',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/D4D03AQHSkakz6yhwzA/profile-displayphoto-shrink_100_100/0/1664861218814?e=1692230400&v=beta&t=RU7TNU-iEmpRMY8LnZZL-OdvqwYmsT2Z08chdeDOK0Q',
        },
        {
          name: 'Anurag',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/C4D03AQGtGzgl0N1f5g/profile-displayphoto-shrink_100_100/0/1650398903087?e=1692230400&v=beta&t=5ekKuczvPFhOuyLKveG9svfrlH3De1aTrG-qzzEhgcg',
        },
        {
          name: 'Sunny',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/D4D03AQFN9yFvEBKklw/profile-displayphoto-shrink_100_100/0/1680363283174?e=1692230400&v=beta&t=naOplxbw9yWqDzsHHe2MzwaGXN4PTeyqtmx8LNa-i80',
        },
        {
          name: 'Parmesh',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/D4D03AQHgwCYpvyByGg/profile-displayphoto-shrink_100_100/0/1668344916523?e=1692230400&v=beta&t=TQlRxThoxj8KoSRkUFrLGHVlFxPZhWubWWGmwcjJ1R0',
        },
        // More people...
      ]

  return (
    <div className="py-24 sm:py-32" style={{ backgroundImage: "url(" + "https://img.freepik.com/free-photo/white-blank-background-texture-design-element_53876-146863.jpg?w=1060&t=st=1686917864~exp=1686918464~hmac=5d833839f45561108026cec1993c075cda3e89686050f5f2c2e5de88f40008ee" + ")",
    backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
    }}>
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6" style={{
                    color: 'brown',
                }}>{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Members