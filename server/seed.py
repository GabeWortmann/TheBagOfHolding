from server.config import app

from server.models import db, Campaign, Campaign_characters, Characters, Items, Quests


if __name__ == '__main__':
    with app.app_context():

        print("deleting tables...")

        db.drop_all()
        db.create_all()

        
        db.session.commit()

        print("creating tables...")

        campaigns = [
            Campaign(
                campaign_title = "Out of the Abyss",
                campaign_desc = "A daring advernture that takes place in the heart of the underdark"
            ),
            Campaign(
                campaign_title = "Keys from the Golden Vault",
                campaign_desc = "A thrilling tale about schemes and larceny that leaves little room for boredom"
            ),
            Campaign(
                campaign_title = "The Odyessy of Theros",
                campaign_desc = "A fantastical take on the Greek Mythology and the Greek conflicts with the Gods"
            )
        ]

        db.session.add_all(campaigns)
        db.session.commit()

        items = [
            Items(
                item_name = "Shortsword",
                item_desc = "Martial/Melee, 1d6 Slashing, Finesse, Light"
            ),
            Items(
                item_name = "Leather Armor",
                item_desc = "Light, AC: 11 + dex mod - The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials."
            ),
            Items(
                item_name = "Potion of Healing",
                item_desc = "You regain 2d4+2 hit points when you drink this potion. Whatever its potency, the potion’s red liquid glimmers when agitated."
            ),
            Items(
                item_name = "Shortbow",
                item_desc = "Simple/Ranged, 1d6 Piercing, Range: 80/320"
            )
        ]

        db.session.add_all(items)
        db.session.commit()

        quests = [
            Quests(
                quest_name = "Help Wanted: Bugbear",
                quest_desc = "A bounty has been placed that calls for the removal of a nearby hostile bugbear encampment. Reward: 50 gold"
            ),
            Quests(
                quest_name = "Investiagte the murder of Father Windfry",
                quest_desc = "Look into the possible murder of Father Windfry and find out who the culprit behind the whole ordeal is. Reward: 20 gold, scroll of Spirit Guardians"
            ),
            Quests(
                quest_name = "Gather Lindroot",
                quest_desc = "A local tavern has requested the retrival of some Lindroot for some specialty menu items. These roots are located in underground caverns, typically near swampy areas. WARNING: possible large goblin camp in the area. Reward: 125 gold"
            )
        ]

        db.session.add_all(quests)
        db.session.commit()

        characters = [
            Characters(
                item_id = items[0].id,
                quest_id = quests[0].id,
                char_name = "Vaylin Kiltar",
                char_desc = "A dashing male human with a decently remarkable fighting prowess and a laughably dry sense of humor."
            ),
            Characters(
                item_id = items[3].id,
                quest_id = quests[2].id,
                char_name = "Lithea Elmonts",
                char_desc = "A quick witted female halfling who knows her way around a forest and a bow who also has a knack for the culinary arts."
            ),
            Characters(
                item_id = items[2].id,
                quest_id = quests[1].id,
                char_name = "Triss Pruinly",
                char_desc = "A meek but determined female elf who has spent a large portion of her life in devotion to her God, through which she has gained her magical abilities."
            )
        ]

        db.session.add_all(characters)
        db.session.commit()

        campaign_characters = [
            Campaign_characters(
                char_id = characters[0].id,
                campaign_id = campaigns[2].id
            ),
            Campaign_characters(
                char_id = characters[0].id,
                campaign_id = campaigns[1].id
            ),
            Campaign_characters(
                char_id = characters[1].id,
                campaign_id = campaigns[1].id
            ),
            Campaign_characters(
                char_id = characters[2].id,
                campaign_id = campaigns[0].id
            ),
        ]

        db.session.add_all(campaign_characters)
        db.session.commit()
        