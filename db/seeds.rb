# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create({ username: "kylesmith1", password: "password", bankroll: 1000000.00 })
u2 = User.create({ username: "mayweather", password: "password", bankroll: 1000000000.00 })
u3 = User.create({ username: "dbilzerian", password: "password", bankroll: 1000000000000.00 })


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
t8  = Team.create({ name: "Padres", city: "San Diego", sport_id: 1 })

t9  = Team.create({ name: "49ers", city: "San Francisco", sport_id: 2 })
t10 = Team.create({ name: "Seahawks", city: "Seattle", sport_id: 2 })
t11 = Team.create({ name: "Giants", city: "New York", sport_id: 2 })
t12 = Team.create({ name: "Chargers", city: "San Diego", sport_id: 2 })
t13 = Team.create({ name: "Packers", city: "Green Bay", sport_id: 2 })
t14 = Team.create({ name: "Steelers", city: "Pittsburgh", sport_id: 2 })
t15 = Team.create({ name: "Broncos", city: "Denver", sport_id: 2 })

t16 = Team.create({ name: "Warriors", city: "San Francisco", sport_id: 3 })
t17 = Team.create({ name: "Cavaliers", city: "Cleveland", sport_id: 3 })
t18 = Team.create({ name: "Lakers", city: "Los Angeles", sport_id: 3 })
t19 = Team.create({ name: "Knicks", city: "New York", sport_id: 3 })
t20 = Team.create({ name: "Bulls", city: "Chicago", sport_id: 3 })


g1 = Game.create({ team1_id: 1, team2_id: 2, day_id: 1, odds: 1.5 })
g2 = Game.create({ team1_id: 3, team2_id: 4, day_id: 1, odds: 1.1 })

g3 = Game.create({ team1_id: 9, team2_id: 10, day_id: 1, odds: 2.2 })
g4 = Game.create({ team1_id: 11, team2_id: 12, day_id: 2, odds: 1.5 })

g5 = Game.create({ team1_id: 16, team2_id: 20, day_id: 1, odds: 1.5 })
g6 = Game.create({ team1_id: 17, team2_id: 19, day_id: 2, odds: 1.5 })


d1 = Day.create({ user_id: 1 })
d1 = Day.create({ user_id: 2 })