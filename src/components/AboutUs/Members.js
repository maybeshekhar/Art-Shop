import React from 'react'

const Members = () => {

    const people = [
        {
          name: 'Chandrashekhar',
          role: 'Web Developer',
          imageUrl:
            'https://miro.medium.com/v2/resize:fill:64:64/1*JxNspIw5yUSi1lZfM50u4Q.png',
        },
        {
          name: 'Akshat',
          role: 'Web Developer',
          imageUrl:
            'https://media.licdn.com/dms/image/D4D03AQGNEZ_D5PXlkA/profile-displayphoto-shrink_800_800/0/1687361415930?e=1695254400&v=beta&t=1rxhnox67G2PAkvMavpfSVkN01TTkC1g_VZrP-DrdnY',
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