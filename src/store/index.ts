/*
 * @Author: pierai it_quinna@163.com
 * @Date: 2024-08-01 15:17:55
 * @LastEditors: pierai it_quinna@163.com
 * @LastEditTime: 2024-08-02 10:59:04
 * @FilePath: \vue_element_tag_bar\src\store\index.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { MenuVo } from "@/http/menu/types/menu.vo";
import { defineStore } from "pinia";
import { Breadcrumb, NavTags } from "./types";

type StoreState = {
  isCollapse: boolean;
  menuList: MenuVo[];
  breadcrumbs: Breadcrumb[];
  navTags: NavTags[];
};
export default defineStore("home", {
  state: (): StoreState => {
    return {
      isCollapse: false,
      menuList: [],
      breadcrumbs: [],
      navTags: [{ name: "首页", path: "/" }],
    };
  },
  actions: {
    async GenerateRoutes() {
      // const { data } = await getMenuList({});
      const data = [{
        name: "系统管理",
        path: 'system',
        parentId: null,
        component: 'system/menu/index.vue',
        orderNum: 1,
        icon: '',
        id: 1
      }];
      this.menuList = data;
      return data;
    },
    addTags(tag: NavTags) {
      const isRepeat = this.navTags.find((item) => item.name === tag.name);

      isRepeat ||
        this.navTags.push({ name: tag.name as string, path: tag.path });
    },
  },
});
