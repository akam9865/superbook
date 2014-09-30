# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create({ username: "kylesmith1", password: "jkl;'", bankroll: 1000000.00 })
u2 = User.create({ username: "mayweather", password: "jkl;'", bankroll: 1000000000.00 })
u3 = User.create({ username: "dbilzerian", password: "jkl;'", bankroll: 1000000000000.00 })


s1 = Sport.create({ name: "Baseball" })
s2 = Sport.create({ name: "Football" })
s3 = Sport.create({ name: "Basketball" })


t1  = Team.create({ name: "Giants", city: "San Francisco", sport_id: 1 })
t2  = Team.create({ name: "Dodgers", city: "Los Angeles", sport_id: 1 })
t3  = Team.create({ name: "Yankees", city: "New York", sport_id: 1 })
t4  = Team.create({ name: "Red Sox", city: "Boston", sport_id: 1 })
t5  = Team.create({ name: "Athletics", city: "Oakland", sport_id: 1 })
t6  = Team.create({ name: "Angels", city: "Anaheim", sport_id: 1 })
t7  = Team.create({ name: "Tigers", city: "Detroit", sport_id: 1 })
t8  = Team.create({ name: "Indians", city: "Cleveland", sport_id: 1 })
t9  = Team.create({ name: "Padres", city: "San Diego", sport_id: 1 })
t10 = Team.create({ name: "Diamondbacks", city: "Arizona", sport_id: 1 })
t11 = Team.create({ name: "Mariners", city: "Seattle", sport_id: 1 })
t12 = Team.create({ name: "Rangers", city: "Texas", sport_id: 1 })
t13 = Team.create({ name: "Astros", city: "Houston", sport_id: 1 })
t14 = Team.create({ name: "Blue Jays", city: "Toronto", sport_id: 1 })
t15 = Team.create({ name: "Orioles", city: "Baltimore", sport_id: 1 })
t16 = Team.create({ name: "White Sox", city: "Chicago", sport_id: 1 })
t17 = Team.create({ name: "Rays", city: "Tampa Bay", sport_id: 1 })
t18 = Team.create({ name: "Rockies", city: "Colorado", sport_id: 1 })
t19 = Team.create({ name: "Royals", city: "Kansas City", sport_id: 1 })
t20 = Team.create({ name: "Twins", city: "Minnesota", sport_id: 1 })
t21 = Team.create({ name: "Nationals", city: "Washington", sport_id: 1 })
t22 = Team.create({ name: "Reds", city: "Cincinnati", sport_id: 1 })
t23 = Team.create({ name: "Phillies", city: "Philadelphia", sport_id: 1 })
t24 = Team.create({ name: "Marlins", city: "Miami", sport_id: 1 })
t25 = Team.create({ name: "Mets", city: "New York", sport_id: 1 })
t26 = Team.create({ name: "Cubs", city: "Chicago", sport_id: 1 })
t27 = Team.create({ name: "Cardinals", city: "St. Louis", sport_id: 1 })
t28 = Team.create({ name: "Brewers", city: "Milwaukee", sport_id: 1 })
t29 = Team.create({ name: "Pirates", city: "Pittsburgh", sport_id: 1 })
t30 = Team.create({ name: "Braves", city: "Atlanta", sport_id: 1 })

t31 = Team.create({ name: "49ers", city: "San Francisco", sport_id: 2 })
t32 = Team.create({ name: "Seahawks", city: "Seattle", sport_id: 2 })
t33 = Team.create({ name: "Giants", city: "New York", sport_id: 2 })
t34 = Team.create({ name: "Chargers", city: "San Diego", sport_id: 2 })
t35 = Team.create({ name: "Packers", city: "Green Bay", sport_id: 2 })
t36 = Team.create({ name: "Steelers", city: "Pittsburgh", sport_id: 2 })
t37 = Team.create({ name: "Broncos", city: "Denver", sport_id: 2 })
   
t38 = Team.create({ name: "Warriors", city: "Golden State", sport_id: 3 })
t39 = Team.create({ name: "Cavaliers", city: "Cleveland", sport_id: 3 })
t40 = Team.create({ name: "Lakers", city: "Los Angeles", sport_id: 3 })
t41 = Team.create({ name: "Knicks", city: "New York", sport_id: 3 })
t42 = Team.create({ name: "Bulls", city: "Chicago", sport_id: 3 })


g1  = Game.create({ team1_id:  1, team2_id:  29, day_id: 1, odds: 0.4, sport_id: 1 })
g2  = Game.create({ team1_id:  5, team2_id:  19, day_id: 1, odds: 0.9, sport_id: 1 })
g3  = Game.create({ team1_id:  22, team2_id:  6, day_id: 1, odds: 0.3, sport_id: 1 })
g4  = Game.create({ team1_id:  7, team2_id:  8, day_id: 1, odds: 0.4, sport_id: 1 })
g5  = Game.create({ team1_id:  9, team2_id: 10, day_id: 1, odds: 0.5, sport_id: 1 })
g6  = Game.create({ team1_id: 11, team2_id: 16, day_id: 1, odds: 0.6, sport_id: 1 })
g7  = Game.create({ team1_id: 12, team2_id: 17, day_id: 1, odds: 0.7, sport_id: 1 })
g8  = Game.create({ team1_id: 13, team2_id: 18, day_id: 1, odds: 0.8, sport_id: 1 })
g9  = Game.create({ team1_id: 14, team2_id: 30, day_id: 1, odds: 0.9, sport_id: 1 })

g11  = Game.create({ team1_id: 31, team2_id: 32, day_id: 1, odds: 0.2, sport_id: 2 })
g12  = Game.create({ team1_id: 33, team2_id: 34, day_id: 2, odds: 0.5, sport_id: 2 })

g13 = Game.create({ team1_id: 38, team2_id: 40, day_id: 1, odds: 0.25, sport_id: 3 })
g14 = Game.create({ team1_id: 39, team2_id: 41, day_id: 2, odds: 0.75, sport_id: 3 })


d1 = Day.create({ user_id: 1, date: Date.today + 1 })
d2 = Day.create({ user_id: 2, date: Date.today + 1 })