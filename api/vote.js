let votes = { Mehdi: 0, Tiemele: 0 }; // persistant tant que le server est actif

export default function handler(req, res) {
  if(req.method === 'GET') {
    res.status(200).json(votes);
  } else if(req.method === 'POST') {
    const { candidat } = req.body;
    if(candidat && votes.hasOwnProperty(candidat)){
      votes[candidat]++;
    }
    res.status(200).json(votes);
  } else {
    res.status(405).json({message:'Method not allowed'});
  }
}
