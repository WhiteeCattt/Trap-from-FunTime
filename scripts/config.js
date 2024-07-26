/**
 * Создатель: WhiteeCattt
 * Телеграм-канал: t.me/addons_pe
*/

export default {
    admin_tag: "Admin", // Позволяет разрушать и ставить в трапке блоки
    deleteTime: 30, // Время удаления
    cooldown: 30, // Задержка
    item: { // Предмет
        typeId: "minecraft:netherite_scrap", // Айди предмета
        name: "§r§fТрапка", // Название
        lore: ["§r* Создаёт ловушку 3x3"] // Описание (Максимум 50 символов в строке)
    },
    sound: "tile.piston.out", // Звук при установке трапки
    min_y: -61, // Минимальная высота
    max_y: 317, // Максимальная высота
    messages: { // Сообщения
        break_cancel (player) => { // Отмена события разрушения блока
            player.sendMessage("§l§cЭй!§r §7Извините, но вы не можете делать это здесь.");
        },
        place_cancel (player) => { // Отмена события установка блока
            player.sendMessage("§l§cЭй!§r §7Извините, но вы не можете делать это здесь.");
        },
        y_cancel (player) => { // Отмена из-за высоты
            player.sendMessage("Вы не можете использовать этот предмет здесь!");
        },
        near_trap (player) => { // Рядом уже есть трапка
            player.sendMessage("Вы пересикаете другую трапку!");
        },
        cooldown (player, time) => { // Задержка
            player.runCommandAsync(`title @s actionbar Подождите ещё §e${time.toFixed(1)} сек.`);
        }
    }
}
