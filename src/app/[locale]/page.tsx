// pages/index.js
import React, { Suspense } from 'react'; // 确保导入 React
import { getSortedPostsData } from '@/lib/posts'
import { getCategories, getGameCompanies, getGameSeries } from '@/lib/data';

import { ToolsList } from '@/components/ToolsList';
import { ArticleList } from '@/components/ArticleList'
import GameList from '@/components/GameList';

import { Search } from '@/components/Search';
import {getTranslations, getLocale} from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('home');
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}


type categoryType = { 
  name: string; 
  src: string; 
  description: string;
  link: string; 
}


export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations('home');
  const companies = getGameCompanies(locale);

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold lg:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          游戏系列大全
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          探索世界知名游戏公司的经典游戏系列，了解游戏历史，发现游戏文化
        </p>
      </section>

      <div className="space-y-20">
        {companies.map((company) => (
          <GameList
            key={company.link}
            company={company}
            series={getGameSeries(company.link, locale)}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}