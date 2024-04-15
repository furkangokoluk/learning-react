function App() {

  // Javascript kodları yazılır.
  const employe = [
    {
      id: 1,
      name: "Fukan",
      status: "YZM",
      salary: 20.000,
      allowed: false
    },
    {
      id: 2,
      name: "Yunus Emre",
      status: "Mimar",
      salary: 14.000,
      allowed: true
    },
    {
      id: 3,
      name: "Semih",
      status: "Psikolog",
      salary: 12.000,
      allowed: false
    }
  ]


  return (
    <div>
      {
        employe.map((person) => (
          <div key={person.id}>
            İsmi : {person.name} <br />
            Statüsü : {person.status} <br />
            Maaşı : {person.salary} <br />
            İzin durumu : {person.allowed ? "İzinli" : "İzinli değil"}
          </div>
        ))
      }
    </div>
  )
}

export default App
