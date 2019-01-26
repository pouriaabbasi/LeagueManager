namespace leagueManager.MODEL.Type
{
    public class TypeModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int P2PPlayCount { get; set; }
        public bool IsContinuous { get; set; }
    }
}