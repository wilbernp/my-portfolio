import { ISkill } from "@/types/skill";
import fileTypeHtml from '@iconify/icons-vscode-icons/file-type-html';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import expressjsLight from '@iconify/icons-skill-icons/expressjs-light';
import fileTypeNestjs from '@iconify/icons-vscode-icons/file-type-nestjs';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import sequelizeIcon from '@iconify/icons-logos/sequelize';
import mongodbIcon from '@iconify/icons-logos/mongodb-icon';
import mongooseIcon from "@/assets/logos/mongoose.svg"
import jwtIcon from '@iconify/icons-logos/jwt-icon';
import passportIcon from '@iconify/icons-logos/passport';
import swaggerIcon from '@iconify/icons-logos/swagger';

export const backendData:ISkill[] = [
    {
        label:"Nodejs",
        href:"#",
        icon:nodejsIcon
    },
    {
        label:"Express",
        href:"#",
        icon:expressjsLight
    },
    {
        label:"Nestjs",
        href:"#",
        icon:fileTypeNestjs
    },
    {
        label:"PostgreSQL",
        href:"#",
        icon:postgresqlIcon
    },
    {
        label:"Sequelize",
        href:"#",
        icon:sequelizeIcon
    },
    {
        label:"MongoDB",
        href:"#",
        icon:mongodbIcon
    },
    {
        label:"Mongoose",
        href:"#",
        icon:fileTypeHtml
    },
    {
        label:"JWT",
        href:"#",
        icon:jwtIcon
    },
    {
        label:"Passportjs",
        href:"#",
        icon:passportIcon
    },
    {
        label:"Swagger",
        href:"#",
        icon:swaggerIcon
    },
]
