import React from 'react';
import styles from './Alert.module.css';
import { Link } from 'react-router-dom';
import loadingIcon from '../../asset/icons/loading.svg';
import bookmarkIcon from '../../asset/icons/empty_bookmark.svg';
import contentIcon from '../../asset/icons/content.svg';
import errorIcon from '../../asset/icons/error.svg';

const DetailComponents = {
  data: () => (
    <>
      <img
        src={loadingIcon}
        alt=''
      />
      <div>
        <span className={styles.accent}>로딩</span> 중입니다. 잠시만
        기다려주세요.
      </div>
    </>
  ),
  bookmark: () => (
    <>
      <img
        src={bookmarkIcon}
        alt=''
      />
      <div>
        현재&nbsp;<span className={styles.accent}>북마크</span>가 비어있습니다.
      </div>
    </>
  ),
  content: ({ name }) => (
    <>
      <img
        src={contentIcon}
        alt=''
      />
      <div>
        현재&nbsp;<span className={styles.accent}>{name}</span>이 비어있습니다.
      </div>
    </>
  ),
  error: () => (
    <>
      <img
        src={errorIcon}
        alt=''
      />
      <div>
        현재&nbsp; 오류가 발생 하였습니다.
        <br />
        <Link
          to='/'
          className={styles.accent}
        >
          이곳
        </Link>
        을 클릭하여 메인페이지로 이동하세요.
      </div>
    </>
  ),
};

export default function Alert({ type, name }) {
  const DetailComponent = DetailComponents[type] || DetailComponents['data'];

  return (
    <section className={styles.container}>
      <DetailComponent name={name} />
    </section>
  );
}
