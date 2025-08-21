export type ProductPrices = {
    kickoff:      EliteLeague;
    pro_play:     EliteLeague;
    elite_league: EliteLeague;
}

export type EliteLeague = {
    sku:    string;
    name:   string;
    prices: Prices;
}

export type Prices = {
    monthly:  Annually;
    annually: Annually;
}

export type Annually = {
    price:    string;
    symbol:   string;
    iso_code: string;
    promo:    string;
    cta:      string;
}
