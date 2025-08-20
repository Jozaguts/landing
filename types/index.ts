export type ProductPrices = {
    kickoff:      EliteLeague;
    pro_play:     EliteLeague;
    elite_league: EliteLeague;
}

export type EliteLeague = {
    sku:            string;
    name:           string;
    monthly_price:  number;
    annually_price: number;
    cta:            string;
}
