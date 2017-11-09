
module.exports = function(req, res){
  if(req.session.conversationStack){
    res.status(200).json(req.session.conversationStack);
  }else{
    res.status(200).json(null);
  }
};
